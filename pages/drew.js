const lazycss = `

body {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

#dvd {
  position: absolute;
  background-size: 100% auto;
  background-repeat: no-repeat;
  width: 400px;
  height: 176px;
  color: #fff;
}

#dvd:before {
  font-family: 'dvd' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "🎂";
  font-size: 175px;
}`;

export default function Index() {
  return (
    <div
      style={{
        width: "100%",
        fontSize: "80px",
        textAlign: "center",
        display: "grid",
        fontFamily: `"Comic Sans MS", cursive, sans-serif`,
      }}
    >
      <div id="dvd"></div>
      <h1 style={{ width: "100%", fontSize: "130px", textAlign: "center" }}>
        <span class="letter">H</span>
        <span class="letter">A</span>
        <span class="letter">P</span>
        <span class="letter">P</span>
        <span class="letter">Y</span>
        <span class="letter"> </span>
        <span class="letter">B</span>
        <span class="letter">I</span>
        <span class="letter">R</span>
        <span class="letter">T</span>
        <span class="letter">H</span>
        <span class="letter">D</span>
        <span class="letter">A</span>
        <span class="letter">Y</span>
      </h1>
      <span class="letter">
        Hope you have a fab day and an even better year!
      </span>
      <span className="letter">✌️ drew</span>
      <script src="/drew.js"></script>
      <style>{lazycss}</style>
    </div>
  );
}
