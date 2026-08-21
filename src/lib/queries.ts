import { supabase } from "@/lib/supabase";
import type {
  CompanyInfo,
  ConsultTopic,
  Guide,
  Review,
  ServiceCategory,
  StaffStory,
} from "@/types/site";

export async function getServices(): Promise<ServiceCategory[]> {
  const { data, error } = await supabase
    .from("services")
    .select("slug, tag, title, description, accent")
    .order("sort_order");
  if (error) throw error;
  return data;
}

export async function getGuides(): Promise<Guide[]> {
  const { data, error } = await supabase
    .from("guides")
    .select("badge, title, description")
    .order("sort_order");
  if (error) throw error;
  return data;
}

export async function getReviews(): Promise<Review[]> {
  const { data, error } = await supabase
    .from("reviews")
    .select("category, name, rating, content")
    .order("created_at");
  if (error) throw error;
  return data;
}

export async function getConsultTopics(): Promise<ConsultTopic[]> {
  const { data, error } = await supabase
    .from("consult_topics")
    .select("title, description, count")
    .order("sort_order");
  if (error) throw error;
  return data;
}

export async function getStaffStories(): Promise<StaffStory[]> {
  const { data, error } = await supabase
    .from("staff_stories")
    .select("role, name, title, excerpt")
    .order("sort_order");
  if (error) throw error;
  return data;
}

export async function getMoreInfoLinks(): Promise<string[]> {
  const { data, error } = await supabase
    .from("more_info_links")
    .select("label")
    .order("sort_order");
  if (error) throw error;
  return data.map((row) => row.label);
}

export async function getCompanyInfo(): Promise<CompanyInfo> {
  const { data, error } = await supabase
    .from("company_info")
    .select("name, biz_number, ceo, address, email, ir_email, phone, hours")
    .single();
  if (error) throw error;
  return {
    name: data.name,
    bizNumber: data.biz_number,
    ceo: data.ceo,
    address: data.address,
    email: data.email,
    irEmail: data.ir_email,
    phone: data.phone,
    hours: data.hours,
  };
}
