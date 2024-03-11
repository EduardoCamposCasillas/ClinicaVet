import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  window.env.REACT_APP_SUPABASE_UR, 
  window.env.REACT_APP_SUPABASE_ANON_KEY
  );
