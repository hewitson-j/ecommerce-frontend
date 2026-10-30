import { useParams } from "react-router";
import "./OrderDetails.css";

export default function OrderDetails() {
  const { orderId } = useParams<{ orderId: string }>();

  if (!orderId) {
    return <h1>Invalid product ID</h1>;
  }

  return <div className="order-details-page">Order Details - {orderId}</div>;
}
