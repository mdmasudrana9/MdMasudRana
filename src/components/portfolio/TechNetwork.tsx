const TechNetwork = () => {
  return (
    <div className="relative">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <svg
        viewBox="0 0 1273 906"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lg:w-[450px] w-full h-full"
      >
        <g>
          <path
            d="M318.587 315.483V510.936L477.544 431.391V236.949M318.587 315.483L159.63 236.949M318.587 315.483L477.544 236.949M318.587 315.483V509.925L159.63 589.469M318.587 315.483L159.63 237.286L0.673828 315.483M318.587 315.483L159.63 394.016M477.544 236.949L318.587 158.753L159.63 236.949M477.544 236.949V432.402M477.544 236.949L318.587 158.416L477.544 80.2192L636.5 158.416L477.544 236.949ZM159.63 236.949V79.5451M159.63 589.469V394.016M159.63 589.469L0.673828 509.925V315.483M0.673828 315.483L159.63 394.016M159.63 79.5451L318.587 1.34863L477.544 79.5451L318.587 158.079L159.63 79.5451ZM795.457 395.701V237.286M795.457 237.286L636.5 159.09L477.544 237.286M795.457 237.286L636.5 315.82M477.544 237.286V431.728L601.139 491.762M477.544 237.286L636.5 315.82M636.5 315.82V472.887M954.414 668.003V473.561M954.414 473.561L795.457 395.364L636.5 473.561L795.457 552.094M954.414 473.561L795.457 552.094M954.414 473.561V669.014M954.414 473.561L795.457 395.027L954.414 316.831L1113.37 395.027L954.414 473.561ZM795.457 552.094L636.5 473.898L477.544 552.094M795.457 552.094L636.5 630.628M477.544 552.094V746.534L636.5 826.078V630.628M477.544 552.094L636.5 630.628M795.457 709.498V904.949M795.457 709.498L636.5 630.965M795.457 709.498L954.414 630.965M795.457 904.949L954.414 825.404V630.965M795.457 904.949L636.5 825.404V630.965M636.5 630.965L795.457 552.768L954.414 630.965M1113.37 552.431V747.882M1113.37 552.431L954.414 473.898M1113.37 552.431L1272.33 473.898M1113.37 747.882L1272.33 668.34V473.898M1113.37 747.882L954.414 668.34V473.898M954.414 473.898L1113.37 395.701L1272.33 473.898"
            stroke="url(#paint-linear)"
            strokeOpacity="0.6"
            strokeWidth="2"
          />
        </g>

        {/* Green dots */}
        <circle cx="159" cy="586" r="5" fill="#B7BDC8" />
        <circle cx="159" cy="393" r="5" fill="#B7BDC8" />
        <circle cx="793" cy="551" r="5" fill="#B7BDC8" />
        <circle cx="1113" cy="551" r="5" fill="#B7BDC8" />
        <circle cx="1113" cy="398" r="5" fill="#B7BDC8" />
        <circle cx="793" cy="237" r="5" fill="#B7BDC8" />
        {/* <circle cx="159" cy="586" r="5" fill="#27B173" />
        <circle cx="159" cy="393" r="5" fill="#27B173" />
        <circle cx="793" cy="551" r="5" fill="#27B173" />
        <circle cx="1113" cy="551" r="5" fill="#27B173" />
        <circle cx="1113" cy="398" r="5" fill="#27B173" />
        <circle cx="793" cy="237" r="5" fill="#27B173" /> */}

        {/* Tech icons */}
        <foreignObject x="440" y="105" width="100" height="100">
          <img
            src="https://img.icons8.com/fluency/48/nextjs.png"
            alt="Next.js"
            className="w-full h-full opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
            style={{ animation: "3s ease-in-out 0.75s infinite float" }}
          />
        </foreignObject>
        <foreignObject x="580" y="185" width="100" height="100">
          <img
            src="https://img.icons8.com/officel/80/react.png"
            alt="React"
            className="w-full h-full opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
            style={{ animation: "2s linear 1.5s infinite spin" }}
          />
        </foreignObject>
        <foreignObject x="120" y="270" width="100" height="100">
          <img
            src="https://img.icons8.com/fluency/48/node-js.png"
            alt="Node.js"
            className="w-full h-full opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
            style={{ animation: "3s ease-in-out 2.25s infinite float" }}
          />
        </foreignObject>
        <foreignObject x="570" y="500" width="100" height="100">
          <img
            src="https://img.icons8.com/color/48/mongodb.png"
            alt="MongoDB"
            className="w-full h-full opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
            style={{ animation: "3s ease-in-out 2.25s infinite float" }}
          />
        </foreignObject>
        <foreignObject x="740" y="570" width="100" height="100">
          <img
            src="https://img.icons8.com/color/48/tailwindcss.png"
            alt="Tailwind CSS"
            className="w-full h-full opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
            style={{ animation: "3s ease-in-out 2.25s infinite float" }}
          />
        </foreignObject>
        <foreignObject x="870" y="330" width="100" height="100">
          <img
            src="https://img.icons8.com/fluency/48/mysql-logo.png"
            alt="MySQL"
            className="w-full h-full opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
            style={{ animation: "3s ease-in-out 0.75s infinite float" }}
          />
        </foreignObject>

        <defs>
          <linearGradient
            id="paint-linear"
            x1="1272.23"
            y1="479.474"
            x2="506.242"
            y2="-216.277"
            gradientUnits="userSpaceOnUse"
          >
            {/* <stop stopColor="#27b173" /> */}
            <stop stopColor="var(--border)" />
            {/* <stop offset="0.619553" stopColor="#1a663f" /> */}
            <stop offset="0.619553" stopColor="var(--border)" />
            {/* <stop offset="0.93102" stopColor="#26312d" /> */}
            <stop offset="0.93102" stopColor="var(--border)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TechNetwork;
