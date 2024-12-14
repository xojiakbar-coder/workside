import { Title } from "../Generic";

const Contact = () => {
  return (
    <div className="w-full px-[3%]">
      <div className="flex flex-col gap-[40px] items-center h-max min-h-[92vh] pt-[70px]">
        <Title type="secondary" className="font-grotesk">
          Bizga ushbu manbalar orqali aloqaga chiqishingiz mumkin
        </Title>
        <div className="flex justify-center w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.1099065125222!2d69.44633727662138!3d41.3934194712991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef189eca30c29%3A0x95727829e4ea1680!2zUWlicmF5LMOVbnFvcsSfb24!5e0!3m2!1sru!2s!4v1733856025520!5m2!1sru!2s"
            width="80%"
            height="450"
            className="shadow-light-shadow rounded-lg"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
