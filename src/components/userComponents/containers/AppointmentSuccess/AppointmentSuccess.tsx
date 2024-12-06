import Layout from "@/components/userComponents/ui/LayOut/LayOut";
import SuccessIcon from "@/components/userComponents/ui/SuccessIcon/SuccessIcon";
import AppointmentDetails from "@/components/userComponents/ui/AppointmentDetails/AppointmentDetails";

const AppointmentSuccess = () => {
  return (
    <Layout>
      <div className="text-center flex flex-col items-center"> 
        <SuccessIcon />
        <h1 className="text-2xl font-semibold text-white">
          Your <span className="text-green-400">appointment request</span> has
          been successfully submitted!
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          We'll be in touch shortly to confirm.
        </p>
        <AppointmentDetails
          doctorName="Dr. Adam Smith"
          date="23 June 2024 - 5:00 PM"
        />
      </div>
    </Layout>
  );
};

export default AppointmentSuccess;