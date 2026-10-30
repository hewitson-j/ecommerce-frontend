import { useParams } from "react-router";
import "./Browse.css";

export default function Browse() {
  const { category } = useParams<{ category: string }>();

  if (!category) {
    return <h1>Invalid category</h1>;
  }

  return <div className="browse-page">Browse Page - {category}</div>;
}
