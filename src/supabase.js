import { createClient } from "@supabase/supabase-js";
import { config } from "./config.js"
 
export const supabase = createClient(config.REACT_APP_SUPABASE_URL, config.REACT_APP_SUPABASE_ANON_KEY);