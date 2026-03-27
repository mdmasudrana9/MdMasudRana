import { useState } from "react";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";

const WhatsAppChat = () => {
  const [open, setOpen] = useState<boolean>(false);

  const phoneNumber = "8801703852464";
  const defaultMessage = "Hello!";

  const sendMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      defaultMessage,
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {open && (
        <div style={styles.chatBox}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.profile}>
              <img src="/assets/masud-rana.png" style={styles.avatar} />
              <div>
                <div style={styles.name}>Md Masud Rana</div>
                <div style={styles.status}>Typically replies within 1 hour</div>
              </div>
            </div>

            <button style={styles.close} onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          {/* Body */}
          <div style={styles.body}>
            <div style={styles.message}>
              <strong>Md Masud Rana</strong>
              <p>Hello there! 👋</p>
              <p>How can we help?</p>
              <span style={styles.time}>04:20 PM ✓✓</span>
            </div>
          </div>

          {/* Input */}
          <div style={styles.inputBox}>
            <input
              type="text"
              placeholder="Type a message..."
              style={styles.input}
            />
            <button
              className="flex items-center justify-center"
              style={styles.send}
              onClick={sendMessage}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 z-[999] flex h-[60px] w-[60px] items-center justify-center"
      >
        {/* Slow Ping */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70 animate-ping [animation-duration:2s]"></span>

        {/* Static Icon */}
        <span className="relative flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg">
          <FaWhatsapp size={28} />
        </span>
      </button>
    </>
  );
};

export default WhatsAppChat;

const styles: { [key: string]: React.CSSProperties } = {
  floating: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    cursor: "pointer",
    zIndex: 999,
  },

  chatBox: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "330px",
    background: "#111",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    zIndex: 999,
  },

  header: {
    background: "#56B661",
    color: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  profile: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },

  name: {
    fontWeight: "bold",
    fontSize: "14px",
  },

  status: {
    fontSize: "12px",
    opacity: 0.8,
  },

  close: {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },

  body: {
    background: "url('https://i.imgur.com/2nCt3Sbl.png')",
    padding: "15px",
    height: "150px",
  },

  message: {
    background: "#56B661",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    maxWidth: "220px",
    fontSize: "14px",
  },

  time: {
    fontSize: "10px",
    opacity: 0.8,
    display: "block",
    marginTop: "5px",
    textAlign: "right",
  },

  inputBox: {
    display: "flex",
    background: "#222",
    padding: "8px",
  },

  input: {
    flex: 1,
    background: "#333",
    border: "none",
    color: "white",
    padding: "8px",
    borderRadius: "20px",
    outline: "none",
  },

  send: {
    marginLeft: "8px",
    background: "#25D366",
    border: "none",
    color: "white",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    cursor: "pointer",
  },
};
