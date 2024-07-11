import CompanyOverview from './CompanyOverview';
import TeamIntroduction from './TeamIntroduction';
import CustomerTestimonials from './CustomerTestimonials';
import ContactInformation from './ContactInformation';

const AboutUs = () => {
    return (
        <div>
            <CompanyOverview/>
            <TeamIntroduction/>
            <CustomerTestimonials/>
            <ContactInformation/>
        </div>
    );
};

export default AboutUs;