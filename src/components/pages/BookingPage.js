import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";
import Layout from "../Layout";
import ReservationForm from "../sections/reservePages/BookingForm";
import Heading from "../sections/reservePages/Heading";

export default function BookingPage() {
  const output = fetchAPI(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes, output);
  function updateTimes(date) {
    return fetchAPI(date);
  }
  return (
    <Layout>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </Layout>
  );
}
