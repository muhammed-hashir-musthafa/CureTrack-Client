import Layout from "@/components/userComponents/ui/SignUpLayOut/LayOut";
import InputField from "@/components/userComponents/ui/InputField/InputField";
import RadioGroup from "@/components/userComponents/ui/RadioGroup/RadioGroup";
import DatePicker from "@/components/userComponents/ui/DatePicker/DatePicker";
import Button from "@/components/userComponents/ui/GreenButton/GreenButton";
import signupBg from '@/../public/images/signupBg.png'
import Image from "next/image";

const SignUpForm = () => {
  return (
    <Layout>
      {/* Left Section */}
      <div className="flex-1 p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Hi there, ....</h1>
          <p className="text-sm text-gray-400">Get Started with Appointments.</p>
        </div>
        <form>
          <InputField label="Full Name" placeholder="Cure track" />
          <InputField
            label="Email Address"
            placeholder="curetrack@gmail.com"
            type="email"
            icon={<i className="fas fa-envelope" />}
          />
          <InputField label="Password" placeholder="Password" type="password" />
          <InputField
            label="Aadhaar No."
            placeholder="0000 0000 0000"
            icon={<i className="fas fa-id-card" />}
          />
          <InputField
            label="Phone Number"
            placeholder="+00 0342 0453 34"
            type="tel"
            icon={<i className="fas fa-phone" />}
          />
          <RadioGroup
            label="Gender"
            name="gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
          />
          <DatePicker label="Date of Birth" />
          <Button label="Get Started" />
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex flex-1 bg-cover bg-center rounded-r-lg">
        <Image
          src={signupBg}
          alt="Doctor"
          className="object-cover w-full h-full rounded-r-lg"
        />
      </div>
    </Layout>
  );
};

export default SignUpForm;