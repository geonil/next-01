import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/hero-section";
import ServiceMenu from "@/components/service-menu";
import GuideSection from "@/components/guide-section";
import ReviewSection from "@/components/review-section";
import ConsultSection from "@/components/consult-section";
import StorySection from "@/components/story-section";
import MoreInfoSection from "@/components/more-info-section";
import SiteFooter from "@/components/site-footer";
import {
  getCompanyInfo,
  getConsultTopics,
  getGuides,
  getMoreInfoLinks,
  getReviews,
  getServices,
  getStaffStories,
} from "@/lib/queries";

export default async function Home() {
  const [
    services,
    guides,
    reviews,
    consultTopics,
    staffStories,
    moreInfoLinks,
    companyInfo,
  ] = await Promise.all([
    getServices(),
    getGuides(),
    getReviews(),
    getConsultTopics(),
    getStaffStories(),
    getMoreInfoLinks(),
    getCompanyInfo(),
  ]);

  return (
    <>
      <SiteHeader phone={companyInfo.phone} />
      <main className="flex-1">
        <HeroSection companyInfo={companyInfo} />
        <ServiceMenu services={services} />
        <GuideSection guides={guides} />
        <ReviewSection reviews={reviews} />
        <ConsultSection consultTopics={consultTopics} companyInfo={companyInfo} />
        <StorySection staffStories={staffStories} />
        <MoreInfoSection moreInfoLinks={moreInfoLinks} />
      </main>
      <SiteFooter companyInfo={companyInfo} />
    </>
  );
}
