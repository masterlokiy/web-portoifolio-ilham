import bangkitIcon from "@assets/images/icon certification/bangkit_logo.webp";
import ciscoIcon from "@assets/images/icon certification/cisco.webp";
import courseraIcon from "@assets/images/icon certification/coursera.webp";
import deepLearningAiIcon from "@assets/images/icon certification/DeepLearning.AI.webp";
import dicodingIcon from "@assets/images/icon certification/dicoding.webp";
import forumAsistenIcon from "@assets/images/icon certification/forum_asisten_logo.webp";

const LINKEDIN_CERTIFICATIONS_URL = "https://www.linkedin.com/in/ilhammnw-e";

const certifications = [
  {
    id: "bangkit",
    title: "Bangkit Academy",
    issuer: "Bangkit Academy led by Google, Tokopedia, Gojek, Traveloka",
    image: bangkitIcon,
    link: LINKEDIN_CERTIFICATIONS_URL,
  },
  {
    id: "cisco",
    title: "Cisco Certified",
    issuer: "Cisco",
    image: ciscoIcon,
    link: LINKEDIN_CERTIFICATIONS_URL,
  },
  {
    id: "coursera",
    title: "Coursera Verified",
    issuer: "Coursera",
    image: courseraIcon,
    link: LINKEDIN_CERTIFICATIONS_URL,
  },
  {
    id: "deeplearningai",
    title: "DeepLearning.AI Verified",
    issuer: "DeepLearning.AI",
    image: deepLearningAiIcon,
    link: LINKEDIN_CERTIFICATIONS_URL,
  },
  {
    id: "dicoding",
    title: "Dicoding Indonesia Certified",
    issuer: "Dicoding Indonesia",
    image: dicodingIcon,
    link: LINKEDIN_CERTIFICATIONS_URL,
  },
  {
    id: "forum_asisten",
    title: "Forum Asisten",
    issuer: "Universitas Amikom Yogyakarta",
    image: forumAsistenIcon,
    link: LINKEDIN_CERTIFICATIONS_URL,
  },
];

export default certifications;
