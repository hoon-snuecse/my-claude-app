-- Fix authentication permissions issue
-- Allow anonymous access to check if email exists in user_permissions during sign-in

-- Drop existing policy that might be blocking
DROP POLICY IF EXISTS "Users can view own permissions" ON user_permissions;
DROP POLICY IF EXISTS "Admins can view all user permissions" ON user_permissions;

-- Create new policy that allows checking email existence during authentication
CREATE POLICY "Allow email existence check" 
  ON user_permissions FOR SELECT 
  USING (true)  -- Allow all SELECT queries
  WITH CHECK (false);  -- But don't allow modifications

-- Re-create admin policy for full access
CREATE POLICY "Admins can manage all user permissions" 
  ON user_permissions FOR ALL 
  USING (
    -- Either the user is checking their own email OR they are an admin
    email = auth.jwt() ->> 'email' 
    OR EXISTS (
      SELECT 1 FROM user_permissions 
      WHERE email = auth.jwt() ->> 'email' 
      AND role = 'admin'
    )
  );

-- Ensure the initial admin user exists
INSERT INTO user_permissions (email, role, claude_daily_limit, can_write) 
VALUES ('hoon@snuecse.org', 'admin', 999999, true)
ON CONFLICT (email) DO UPDATE 
SET role = 'admin', claude_daily_limit = 999999, can_write = true;