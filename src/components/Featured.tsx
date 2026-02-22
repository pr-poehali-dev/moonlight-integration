import GreetingSection from "./featured/GreetingSection";
import CalendarSection from "./featured/CalendarSection";
import VenueSection from "./featured/VenueSection";
import ProgramSection from "./featured/ProgramSection";
import DressCodeSection from "./featured/DressCodeSection";
import GuestSurveySection from "./featured/GuestSurveySection";
import WishesSection from "./featured/WishesSection";

export default function Featured() {
  return (
    <div
      id="about"
      className="relative flex flex-col items-center w-full"
      style={{ backgroundColor: "#f9f7f4", paddingBottom: "0" }}
    >
      <GreetingSection />
      <CalendarSection />
      <VenueSection />
      <ProgramSection />
      <DressCodeSection />
      <GuestSurveySection />
      <WishesSection />
    </div>
  );
}