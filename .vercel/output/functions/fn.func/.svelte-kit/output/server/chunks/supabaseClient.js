import { createClient } from "@supabase/supabase-js";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtibWh1YXBxbHBwc3Rza3Z6em53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2NjkwMDQsImV4cCI6MjAyMDI0NTAwNH0.nbtMNdRjpiDUum11FCL--u6DJCIT8f2ht8FthqaD8zU";
const SUPABASE_URL = "https://kbmhuapqlppstskvzznw.supabase.co";
const supabase = createClient(SUPABASE_URL, ANON_KEY);
export {
  supabase as s
};
