import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import animations from "@/styles/animations.module.css";

import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import { toast } from "react-toastify";
import HomeLayout from "@/components/HomeLayout";

// const var1 = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID;

const ContactUs = () => {
  const form = useRef();
  const [validated, setValidated] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });
  const [formVals, setFormVals] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormVals({
      ...formVals,
      [e.target.name]: e.target.value,
    });
    if (e.target.name == "user_email") {
      if (
        !/(^\s)|(\s$)/.test(e.target.value) &&
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/.test(
          e.target.value
        ) &&
        e.target.value !== ""
      ) {
        setValidated({
          ...validated,
          [e.target.name]: true,
        });
      } else
        setValidated({
          ...validated,
          [e.target.name]: false,
        });
    } else if (e.target.name === "user_name") {
      if (
        !/(^\s)|(\s$)/.test(e.target.value) &&
        !/\W/.test(e.target.value.split(" ").join("")) &&
        e.target.value !== ""
      ) {
        setValidated({
          ...validated,
          [e.target.name]: true,
        });
      } else
        setValidated({
          ...validated,
          [e.target.name]: false,
        });
    } else if (e.target.name === "message") {
      if (!/(^\s)|(\s$)/.test(e.target.value) && e.target.value !== "") {
        setValidated({
          ...validated,
          [e.target.name]: true,
        });
      } else
        setValidated({
          ...validated,
          [e.target.name]: false,
        });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.contact_number.value = 123;

    setLoading(true);
    setTimeout(() => {
      setFormVals({
        user_name: "",
        user_email: "",
        message: "",
      });
      setValidated({
        user_name: false,
        user_email: false,
        message: false,
      });
      setLoading(false);
      toast.success("E-mail enviado correctamente", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }, 2000);

    // emailjs
    //   .sendForm(
    //     process.env.NEXT_PUBLIC_EMAILJS_SERVICEID,
    //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID,
    //     form.current,
    //     process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY
    //   )
    //   .then(
    //     (result) => {
    //       setFormVals({
    //         user_name: "",
    //         user_email: "",
    //         message: "",
    //       });
    //       setValidated({
    //         user_name: false,
    //         user_email: false,
    //         message: false,
    //       });
    //       setLoading(false);
    //       toast.success("E-mail enviado correctamente", {
    //         position: "bottom-left",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       toast.error("Error en el envío", {
    //         position: "bottom-left",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //       });
    //     }
    //   );
  };

  return (
    <HomeLayout>
      <div className="min-h-screen w-full">
        <div className="flex relative h-full">
          {/* <figcaption className="h-screen">
            <Image src={Saxo} fill />
          </figcaption> */}
          <div
            className="bg-no-repeat bg-fixed bg-cover bg-center bg-[url('https://img4.goodfon.com/original/1366x768/7/2f/ulitsa-muzykant-saksofon.jpg')] 
                        h-screen w-screen flex justify-end items-center"
          >
            <form
              className="flex flex-col sm:w-2/5 max-w-screen w-screen gap-1 bg-white bg-opacity-90 h-full justify-center p-1 px-4"
              id="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <h1 className="text-3xl font-semibold my-2 text-gold-400">
                Formulario de contacto
              </h1>
              <input type="hidden" name="contact_number" />
              <label className="text-lg font-medium">
                Nombre <span className="text-redwine">*</span>
              </label>
              <input
                className={`${
                  !validated.user_name && "border-redwine"
                } formInputs`}
                type="text"
                name="user_name"
                onChange={handleChange}
                value={formVals.user_name}
                required
              />
              <i
                className={`${
                  validated.user_name ? "hidden" : "block"
                } text-xs text-redwine`}
              >
                - El nombre no debe tener espacios ni al principio ni al final
              </i>
              <label className="text-lg font-medium">
                E-mail de contacto <span className="text-redwine">*</span>
              </label>
              <input
                className={`${
                  !validated.user_email && "border-redwine"
                } formInputs`}
                type="text"
                name="user_email"
                onChange={handleChange}
                value={formVals.user_email}
                required
              />
              <i
                className={`${
                  validated.user_email ? "hidden" : "block"
                } text-xs whitespace-normal text-redwine`}
              >
                - El e-mail no debe tener espacios ni al principio ni al final y
                debe ser un e-mail
              </i>
              <label className="text-lg font-medium">
                Mensaje <span className="text-redwine">*</span>
              </label>
              <textarea
                className={`${
                  !validated.message && "border-redwine"
                } formInputs`}
                name="message"
                onChange={handleChange}
                value={formVals.message}
                required
              ></textarea>
              <i
                className={`${
                  validated.message ? "hidden" : "block"
                } text-xs whitespace-normal text-redwine`}
              >
                - El mensaje no puede estar vacío y no debe tener espacios al
                principio ni al final
              </i>
              <button
                className="h-10 text-xl border-none bg-gold-600 text-white rounded-sm mt-2 cursor-pointer 
                        hover:bg-gold-400 hover:text-white transition-all duration-200 active:transform 
                        active:translate-y-1 disabled:opacity-50 disabled:cursor-default disabled:hover:bg-gold-600 disabled:hover:text-white"
                type="submit"
                disabled={
                  !(
                    validated.user_email &&
                    validated.user_name &&
                    validated.message
                  ) || loading
                }
              >
                {loading ? (
                  <div className={[animations.loadingNoteAnimation]}>
                    <MusicNoteRoundedIcon />
                  </div>
                ) : (
                  <p>Enviar</p>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default ContactUs;
