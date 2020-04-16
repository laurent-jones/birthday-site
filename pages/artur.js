export default function Index() {
    return (
        <div className="wrapper">
            <link rel="stylesheet" type="text/css" href="/artur.css" />
            <div className="text">
                <h1>Happy Birthday Jen</h1>
                <h2 className="quote">Dear Jen</h2>
                <h2 className="quote">I wish you all the best on your birthday</h2>
                <h2 className="quote">and I wish that we all could spend this time together</h2>
                <h2 className="quote">PS. I stolen this page from codepen, but it's cute 😊</h2>
            </div>
            <div id="scene">
                <div className="bgcover">
                    <div className="ballon"></div>
                    <div className="ballon"></div>
                    <div className="ballon"></div>
                    <div className="ballon"></div>
                    <div className="ballon"></div>
                    <div className="ballon"></div>
                </div>
                <div className="cake">
                    <div className="candle">
                        <div className="candle-1">
                            <div className="wax"></div>
                            <div className="flame"></div>
                        </div>
                    </div>
                    <div className="strip"></div>
                    <div className="strip next"></div>
                </div>
                <div className="platform">
                    <div className="strip"></div>
                    <div className="strip next"></div>
                </div>
            </div>

        </div>
    );
}
