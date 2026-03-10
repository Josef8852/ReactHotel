import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://enumfkulnlmmyzgzlhdq.supabase.co";
const supabaseKey = "sb_publishable_KpfwS8pGgNVKwScYtNe25Q_uJwLToKV";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
