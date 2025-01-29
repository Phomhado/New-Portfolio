type ContactItem = {
  imgSrc: string;
  text: string;
  link?: string;
};

const contacts: ContactItem[] = [
  {
    imgSrc: "/images/gmail.png",
    text: "E-mail",
    link: "mailto:pedro.he.oli10@gmail.com",
  },
  {
    imgSrc: "/images/phone-call.png",
    text: "+5541999695984",
  },
  {
    imgSrc: "/images/github.png",
    text: "GitHub",
    link: "https://github.com/Phomhado",
  },
  {
    imgSrc: "/images/linkedin.png",
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/pedro-henrique-de-oliveira-b4b984239/",
  },
];

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-black p-8 rounded-lg border-4 border-white max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-yellow-500 uppercase">
          My Contacts
        </h2>

        <div className="space-y-6">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center gap-4 border-b-2 border-white py-4">
              <img src={contact.imgSrc} alt={contact.text} className="w-10 h-10" />
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500 transition-all duration-300"
              >
                {contact.text}
              </a>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full py-3 text-white text-xl font-bold uppercase border-4 border-red-600 hover:border-red-500 transition-all duration-300 bg-black hover:bg-red-600 rounded-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
