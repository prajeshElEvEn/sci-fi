function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },

        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    render();
})

function files(index) {
    var data = `
    https://prajesheleven.github.io/sci-fi/assets/images/male0001.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0002.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0003.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0004.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0005.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0006.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0007.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0008.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0009.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0010.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0011.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0012.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0013.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0014.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0015.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0016.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0017.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0018.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0019.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0020.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0021.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0022.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0023.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0024.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0025.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0026.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0027.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0028.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0029.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0030.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0031.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0032.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0033.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0034.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0035.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0036.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0037.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0038.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0039.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0040.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0041.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0042.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0043.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0044.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0045.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0046.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0047.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0048.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0049.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0050.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0051.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0052.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0053.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0054.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0055.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0056.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0057.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0058.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0059.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0060.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0061.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0062.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0063.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0064.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0065.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0066.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0067.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0068.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0069.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0070.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0071.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0072.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0073.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0074.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0075.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0076.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0077.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0078.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0079.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0080.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0081.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0082.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0083.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0084.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0085.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0086.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0087.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0088.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0089.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0090.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0091.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0092.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0093.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0094.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0095.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0096.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0097.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0098.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0099.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0100.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0101.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0102.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0103.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0104.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0105.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0106.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0107.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0108.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0109.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0110.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0111.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0112.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0113.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0114.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0115.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0116.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0117.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0118.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0119.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0120.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0121.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0122.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0123.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0124.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0125.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0126.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0127.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0128.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0129.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0130.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0131.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0132.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0133.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0134.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0135.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0136.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0137.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0138.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0139.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0140.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0141.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0142.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0143.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0144.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0145.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0146.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0147.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0148.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0149.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0150.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0151.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0152.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0153.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0154.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0155.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0156.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0157.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0158.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0159.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0160.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0161.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0162.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0163.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0164.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0165.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0166.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0167.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0168.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0169.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0170.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0171.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0172.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0173.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0174.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0175.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0176.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0177.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0178.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0179.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0180.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0181.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0182.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0183.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0184.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0185.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0186.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0187.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0188.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0189.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0190.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0191.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0192.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0193.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0194.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0195.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0196.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0197.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0198.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0199.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0200.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0201.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0202.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0203.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0204.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0205.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0206.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0207.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0208.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0209.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0210.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0211.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0212.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0213.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0214.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0215.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0216.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0217.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0218.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0219.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0220.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0221.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0222.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0223.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0224.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0225.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0226.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0227.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0228.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0229.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0230.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0231.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0232.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0233.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0234.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0235.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0236.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0237.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0238.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0239.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0240.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0241.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0242.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0243.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0244.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0245.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0246.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0247.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0248.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0249.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0250.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0251.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0252.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0253.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0254.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0255.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0256.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0257.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0258.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0259.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0260.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0261.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0262.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0263.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0264.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0265.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0266.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0267.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0268.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0269.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0270.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0271.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0272.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0273.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0274.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0275.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0276.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0277.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0278.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0279.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0280.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0281.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0282.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0283.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0284.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0285.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0286.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0287.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0288.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0289.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0290.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0291.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0292.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0293.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0294.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0295.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0296.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0297.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0298.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0299.png
    https://prajesheleven.github.io/sci-fi/assets/images/male0300.png
    `
    return data.split('\n')[index]
}

const frameCount = 300
const images = []
const imageSequence = {
    frame: 1
}

for (let i = 0; i < frameCount; i++) {
    const img = new Image()
    img.src = files(i)
    images.push(img)
}

gsap.to(imageSequence, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 0.15,
        trigger: `#page>canvas`,
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
    },
    onUpdate: render
})

images[1].onload = render

function render() {
    scaleImage(images[imageSequence.frame], context)
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas
    var hRatio = canvas.width / img.width
    var vRatio = canvas.height / img.height
    var ratio = Math.max(hRatio, vRatio)
    var centerShift_x = (canvas.width - img.width * ratio) / 2
    var centerShift_y = (canvas.height - img.height * ratio) / 2
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    )
}

ScrollTrigger.create({
    trigger: `#page>canvas`,
    pin: true,
    // markers: true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
})

gsap.to("#page1", {
    scrollTrigger: {
        trigger: `#page1`,
        start: `top top`,
        end: `bottom top`,
        // markers: true,
        pin: true,
        scroller: `#main`
    }
})
gsap.to("#page2", {
    scrollTrigger: {
        trigger: `#page2`,
        start: `top top`,
        end: `bottom top`,
        // markers: true,
        pin: true,
        scroller: `#main`
    }
})
gsap.to("#page3", {
    scrollTrigger: {
        trigger: `#page3`,
        start: `top top`,
        end: `bottom top`,
        // markers: true,
        pin: true,
        scroller: `#main`
    }
})
