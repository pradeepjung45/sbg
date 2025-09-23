import { useParams } from "react-router-dom";
import CompanyDetailTemplate from "@/components/CompanyDetailTemplate";
import { getCompanyBySlug } from "@/utils/companiesData";
import NotFound from "./NotFound";

const CompanyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const company = getCompanyBySlug(slug || "");

  if (!company) {
    return <NotFound />;
  }

  return <CompanyDetailTemplate company={company} />;
};

export default CompanyPage;
