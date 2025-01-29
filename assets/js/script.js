const second_block_data = [
  {
    header: "AI",
    disc: "We all live 100 healthy years",
    img: "assets/images/Second_block/logo1.webp",
    pic: "assets/images/Second_block/pic1.webp",
  },

  {
    header: "Energy",
    disc: "Our homes fix climate change.",
    img: "assets/images/Second_block/logo2.webp",
    pic: "assets/images/Second_block/pic2.webp",
  },
  {
    header: "Aerospace",
    disc: "We unlock the scale of space",
    img: "assets/images/Second_block/logo3.webp",
    pic: "assets/images/Second_block/pic3.webp",
  },
  {
    header: "ROBOTICS",
    disc: "We automate dangerous jobs.",
    img: "assets/images/Second_block/logo4.webp",
    pic: "assets/images/Second_block/pic4.webp",
  },
  {
    header: "BIO",
    disc: "We cure the worst diseases.",
    img: "assets/images/Second_block/logo5.webp",
    pic: "assets/images/Second_block/pic5.webp",
  },
];

const container = document.getElementById("second_block_box");

second_block_data.map((item) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("card_1");

  const boxPic = document.createElement("div");

  itemDiv.style.backgroundImage = `url('${item.pic}')`;
  itemDiv.style.backgroundSize = "cover";
  itemDiv.style.backgroundPosition = "center";

  const imageElement = document.createElement("img");
  imageElement.src = item.img;
  imageElement.alt = item.header;
  imageElement.classList.add("card_image");

  boxPic.classList.add("pic_box");
  boxPic.appendChild(imageElement);

  const box = document.createElement("div");
  box.classList.add("card_box");

  const header = document.createElement("p");
  header.classList.add("card_header");
  header.textContent = item.header;
  box.appendChild(header);

  const disc = document.createElement("p");

  disc.classList.add("card_text");
  disc.textContent = item.disc;
  box.appendChild(disc);

  itemDiv.appendChild(box);
  itemDiv.appendChild(boxPic);

  container.appendChild(itemDiv);
});

const third_block_data2 = [
  {
    header: "WE BUILD THEIR BRAND",
    disc: "naming\nidentity design\nWEB DESIGN",
    pic: "assets/images/Third_block/pic4.webp",
  },

  {
    header: "DEVELOP THEIR DECK",
    disc: "STRATEGY + story copywriting\ndesign",
    pic: "assets/images/Third_block/pic5.webp",
  },
  {
    header: "SPREAD THEIR STORY",
    disc: "SOCIAL STRATEGY\npr strategy\nviral campaigns",
    pic: "assets/images/Third_block/pic6.webp",
  },
];

const container3 = document.getElementById("fourth_block_box");

third_block_data2.map((item) => {
  const itemDiv1 = document.createElement("div");
  itemDiv1.classList.add("card_3");
  itemDiv1.style.padding = "30px 30px 0px 30px";


  const box1 = document.createElement("div");
  box1.classList.add("box4");

  const header1 = document.createElement("p");
  const text = document.createElement("p");

  header1.classList.add("header");
  header1.textContent = item.header;

  text.classList.add("disc1");
  text.innerHTML = item.disc.replaceAll("\n", "<br>");
  box1.appendChild(header1);
  box1.appendChild(text);
  itemDiv1.appendChild(box1);

  const box4 = document.createElement("div");
  box4.classList.add("img_box");
  box4.classList.add("img_box");
  const boxImg = document.createElement("div");
  boxImg.classList.add("layer_img");

  const imgLayer = document.createElement("img");
  imgLayer.src = `assets/images/Third_block/layer2.webp`;
  imgLayer.alt = "layer2";

  boxImg.appendChild(imgLayer);
  box4.appendChild(boxImg);

  box4.style.backgroundImage = `url('${item.pic}')`;
  box4.style.backgroundSize = "cover";
  box4.style.backgroundPosition = "center";

  itemDiv1.appendChild(box4);

  container3.appendChild(itemDiv1);
});

const third_block_data3 = [
  {
    header: "WIZ",
    disc: "CO-FOUNDER & GP",

    header1: "2x VC-BACKED FOUNDER",
    disc1: `Rise: Modern \n Payroll & HR`,
    text1: "SERIES A @ $100M+ VALUATION",

    disc2: `Hazel: AI Coach  \n for Managers`,
    text2: "FOR FIGMA + TOAST \n + SERVICETITAN",

    disc3: `Future Fridays: \n Deep Tech Podcast`,
    text3: "GUESTS FROM WIRED + FORBES + CNET + LUX CAPITAL + USV + ETC",

    pic: "assets/images/Third_block/pic7.webp",
  },
  {
    header: "DAN",
    disc: "CO-FOUNDER & CMO",

    header1: "2x EXITED FOUNDER",
    disc1: "Piccsy: \n Img Bookmarking",
    text1: "2M+ MAU's",

    disc2: `EveryGuyed: \n Media Network`,
    text2: "5M+ READERS P/Y",

    disc3: "This Week in Deep Tech",
    text3: "300+ NEWSLETTERS",

    disc4: "Innovation @ Anomaly",
    text4: "#1 AD AGENCY \n FOR NIKE + SPOTIFY + ETC",

    pic: "assets/images/Third_block/pic8.webp",
  },
];

const container4 = document.getElementById("fifth_block_box");

third_block_data3.map((item, index) => {
  const itemDiv1 = document.createElement("div");

  if (index === 1) {
    itemDiv1.classList.add("card_4");
    itemDiv1.style.alignItems = "flex-end";
  } else {
    itemDiv1.classList.add("card_4");
  }

  itemDiv1.style.backgroundImage = `url('${item.pic}')`;
  itemDiv1.style.backgroundSize = "cover";
  itemDiv1.style.backgroundPosition = "center";

  const box1 = document.createElement("div");

  if (index === 1) {
    box1.classList.add("box_4_content");
    box1.style.textAlign = "right";
  } else {
    box1.classList.add("box_4_content");
    box1.style.textAlign = "left";
  }
  const header1 = document.createElement("p");
  const text = document.createElement("p");

  header1.classList.add("header_4");
  header1.textContent = item.header;

  text.classList.add("disc_4");
  text.textContent = item.disc;

  box1.appendChild(header1);
  box1.appendChild(text);
  itemDiv1.appendChild(box1);

  const boxCont = document.createElement("div");
  boxCont.classList.add("text_box_4");

  const box2 = document.createElement("div");

  if (index === 1) {
    box2.classList.add("box_4_content");
    box2.style.textAlign = "right";
  } else {
    box2.classList.add("box_4_content");
    box2.style.textAlign = "left";
  }

  const header2 = document.createElement("p");
  const text2 = document.createElement("p");
  const text2_diff = document.createElement("p");

  header2.classList.add("disc_4");
  header2.innerHTML = item.header1.replace("\n", "<br>");

  text2.classList.add("text_4");
  text2.style.lineHeight = "30px";
  text2.style.marginBottom = "-10px";
  text2.innerHTML = item.disc1.replace("\n", "<br>");

  text2_diff.classList.add("text_4_diff");
  text2_diff.innerHTML = item.text1.replace("\n", "<br>");

  box2.appendChild(header2);
  box2.appendChild(text2);
  box2.appendChild(text2_diff);

  const box3 = document.createElement("div");

  if (index === 1) {
    box3.classList.add("box_4_content");
    box3.style.textAlign = "right";
  } else {
    box3.classList.add("box_4_content");
    box3.style.textAlign = "left";
  }

  const text3 = document.createElement("p");
  const text3_diff = document.createElement("p");

  text3.classList.add("text_4");
  text3.style.lineHeight = "35px";
  text3.style.lineHeight = "30px";
  text3.style.marginTop = "30px";
  text3.style.marginBottom = "-10px";
  text3.innerHTML = item.disc2.replace("\n", "<br>");

  text3_diff.classList.add("text_4_diff");
  text3_diff.innerHTML = item.text2.replace("\n", "<br>");

  box3.appendChild(text3);
  box3.appendChild(text3_diff);

  const box4 = document.createElement("div");
  if (index === 1) {
    box4.classList.add("box_4_content");
    box4.style.textAlign = "right";
  } else {
    box4.classList.add("box_4_content");
    box4.style.textAlign = "left";
  }

  const text4 = document.createElement("p");
  const text4_diff = document.createElement("p");

  text4.classList.add("text_4");
  text4.style.lineHeight = "30px";
  text4.style.marginTop = "60px";
  text4.style.marginBottom = "-10px";
  text4.innerHTML = item.disc3.replace("\n", "<br>");

  text4_diff.classList.add("text_4_diff");
  text4_diff.innerHTML = item.text3.replace("\n", "<br>");

  const box5 = document.createElement("div");
  if (index === 1) {
    box5.classList.add("box_4_content");
    box5.style.textAlign = "right";

    const text5 = document.createElement("p");
    const text5_diff = document.createElement("p");

    text5.classList.add("text_4");
    text5.style.lineHeight = "35px";
    text5.style.marginTop = "66px";
    text5.style.marginBottom = "-10px";
    text5.innerHTML = item.disc4.replace("\n", "<br>");

    text5_diff.classList.add("text_4_diff");
    text5_diff.innerHTML = item.text4.replace("\n", "<br>");

    box4.appendChild(text5);
    box4.appendChild(text5_diff);
    boxCont.appendChild(box5);
  }

  box4.appendChild(text4);
  box4.appendChild(text4_diff);

  boxCont.appendChild(box2);
  boxCont.appendChild(box3);
  boxCont.appendChild(box4);
  itemDiv1.appendChild(boxCont);

  container4.appendChild(itemDiv1);
});

// const Block5_content = [
//   {
//     disc1: "ASSOCIATE",
//     text1: "Deep Tech Specialist",
//     disc2: "VENTURE PARTNER",
//     text2: "2x Founder + Bio PhD",
//     disc3: "PLUS A \n STAR-STUDDED CREW",
//     text3: "",
//     disc4: "CREATIVE DIRECTOR",
//     text4: "Emmy Member",
//     disc5: "ART DIRECTOR",
//     text5: "Design Professor",
//   },
// ];

// Block5_content.map((item, index) => {
  // const itemDiv2 = document.createElement("div");
  // itemDiv2.classList.add("box_4_bottom");

  // const boxText1 = document.createElement("div");
  // boxText1.classList.add("text_box_bottom");

  // const disc1 = document.createElement("p");
  // disc1.classList.add("disc_4");
  // // disc1.style.marginBottom = '-10px'

  // disc1.innerHTML = item.disc1;

  // const text1 = document.createElement("p");
  // text1.classList.add("text_4");

  // text1.innerHTML = item.text1;

  // boxText1.appendChild(disc1);
  // boxText1.appendChild(text1);

  // const boxText2 = document.createElement("div");
  // boxText2.classList.add("text_box_bottom");
  // const disc2 = document.createElement("p");

  // disc2.classList.add("disc_4");
  // // disc2.style.marginBottom = '-10px'
  // disc2.innerHTML = item.disc2;

  // const text2 = document.createElement("p");
  // text2.classList.add("text_4");
  // text2.innerHTML = item.text2;

  // boxText2.appendChild(disc2);
  // boxText2.appendChild(text2);

  // const boxText3 = document.createElement("div");
  // boxText3.classList.add("text_box_bottom");
  // const disc3 = document.createElement("p");
  // disc3.classList.add("text_4_diff");
  // disc3.classList.add("add_color");

  // disc3.innerHTML = item.disc3.replace("\n", "<br>");

  // boxText3.appendChild(disc3);

  // const boxText4 = document.createElement("div");
  // boxText4.classList.add("text_box_bottom");
  // const disc4 = document.createElement("p");

  // disc4.classList.add("disc_4");
  // // disc4.style.marginBottom = '-10px'
  // disc4.innerHTML = item.disc4;

  // const text4 = document.createElement("p");
  // text4.classList.add("text_4");
  // text4.innerHTML = item.text4;

  // boxText4.appendChild(disc4);
  // boxText4.appendChild(text4);

  // const boxText5 = document.createElement("div");
  // boxText5.classList.add("text_box_bottom");
  // const disc5 = document.createElement("p");

  // disc5.classList.add("disc_4");
  // disc5.innerHTML = item.disc5;

  // const text5 = document.createElement("p");
  // text5.classList.add("text_4");
  // text5.innerHTML = item.text5;

  // boxText5.appendChild(disc5);
  // boxText5.appendChild(text5);

  // itemDiv2.appendChild(boxText1);
  // itemDiv2.appendChild(boxText2);
  // itemDiv2.appendChild(boxText3);
  // itemDiv2.appendChild(boxText4);
  // itemDiv2.appendChild(boxText5);

  // container4.appendChild(itemDiv2);
// });

const data_section_4 = [
  { img: "assets/icons/4rd_Block/pic1.svg", text: "4X" },

  { img: "assets/icons/4rd_Block/pic2.svg", text: "3X" },
  { img: "assets/icons/4rd_Block/pic3.svg", text: "2X" },
  { img: "assets/icons/4rd_Block/pic4.svg", text: "2X" },

  { img: "assets/icons/4rd_Block/pic5.svg", text: "2X" },
  { img: "assets/icons/4rd_Block/pic6.svg", text: "1X" },

  { img: "assets/icons/4rd_Block/pic7.svg", text: "1X" },
  { img: "assets/icons/4rd_Block/pic8.svg", text: "1X" },
];

const container_4 = document.getElementById("row_box");

data_section_4.map((item, index) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("row");

  const img = document.createElement("img");
  img.classList.add("pic_4");
  img.style.marginLeft = "20px";
  img.src = item.img;
  img.alt = `pic${index}`;

  const text = document.createElement("span");
  text.classList.add("text");
  text.style.marginRight = "20px";
  text.textContent = item.text;

  itemDiv.appendChild(img);
  itemDiv.appendChild(text);

  container_4.appendChild(itemDiv);
});

const data_section_6 = [
  {
    img: "assets/images/6rd_Block/pic1.webp",
    header: "PRODUCTS",
    text: "2K + SHARES",
    pic: "assets/icons/6rd_Block/icon1.svg",
  },

  {
    img: "assets/images/6rd_Block/pic2.webp",
    header: "GIFTS",
    pic: "assets/icons/6rd_Block/icon3.svg",
    text: "1MM+ VIEWS",
  },
  {
    img: "assets/images/6rd_Block/pic3.webp",
    header: "VIDEOS",
    text: "3MM+ VIEWS",
    pic: "assets/icons/6rd_Block/icon2.svg",
  },
];

const container_6 = document.getElementById("six_block_box");

data_section_6.map((item, index) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("card_3");
  itemDiv.style.justifyContent = "space-evenly";
  itemDiv.style.padding = "0px 30px";
  const img = document.createElement("img");
  const imgBox = document.createElement("div");
  imgBox.classList.add("pic_6");
  img.src = item.img;
  img.alt = `pic${index}`;
  imgBox.appendChild(img)

  const icon = document.createElement("img");
  icon.classList.add("icon_6");
  icon.src = item.pic;
  icon.alt = `icon${index}`;

  if (index === 1) {
    icon.classList.add("add_style_8");
  }


  const header = document.createElement("span");
  header.classList.add("header");
  header.textContent = item.header;

  const text = document.createElement("span");
  text.style.fontWeight = "700";
  text.classList.add("disc");
  text.textContent = item.text;

  const box = document.createElement("div");
  box.classList.add("icon_6_box");

  if (index === 1) {
    box.classList.add("add_top_6");
  }

  box.appendChild(icon);
  box.appendChild(text);

  itemDiv.appendChild(header);
  itemDiv.appendChild(imgBox);
  itemDiv.appendChild(box);


  container_6.appendChild(itemDiv);
});

const data_section_7 = [
  { img: "assets/images/7rd_Block/pic1.webp", header: "BRAND \n BOOK" },

  { img: "assets/images/7rd_Block/pic2.webp", header: "pitch deck \n framework" },
  {
    img: "assets/images/7rd_Block/pic3.webp",
    header: "storytelling workshops",
  },
];

const container_7 = document.getElementById("seven_block_box");

data_section_7.map((item, index) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("card_3");
  itemDiv.style.padding = "0px 30px 0px";
  itemDiv.classList.add("add_box_7");
  itemDiv.style.justifyContent = "space-evenly";

  const img = document.createElement("img");
  img.style.borderRadius = "15px";
  img.style.width = "100%";
  img.style.height = "100%";


  img.src = item.img;
  img.alt = `pic${index}`;
  const box = document.createElement("div")
  box.classList.add("pic_6");

  if(index < 2){

    box.appendChild(img)
  }
  
  if(index === 2){

    const imgLayerBox = document.createElement("div");
    imgLayerBox.classList.add("layer_img");
    imgLayerBox.style.bottom = "0";
    imgLayerBox.style.left = "0";
    imgLayerBox.style.height = "83%";
    imgLayerBox.style.width = "100%";
    const imgLayer = document.createElement("img");
    imgLayer.src = `assets/images/Third_block/layer2.webp`;
    imgLayer.alt = "layer7";
  
    imgLayerBox.appendChild(imgLayer)
  
    box.appendChild(img)
    box.appendChild(imgLayerBox)


  }
 

  const header = document.createElement("span");
  header.classList.add("header");
  header.style.marginBottom = "0px";
  header.innerHTML = item.header.replace("\n", "<br>");

  itemDiv.appendChild(header);
  itemDiv.appendChild(box);

  container_7.appendChild(itemDiv);
});

const data_section_8 = [
  {
    header: `SOCIAL \n CONTENT`,
    text: "82",
  },
  {
    header: "PITCH DECK + Story SUPPORT",
    text: "30",
  },
  {
    header: "launch + Pr + growth support",
    text: "24",
  },
  {
    header: "agency + talent referrals",
    text: "20",
  },
  {
    header: "films + viral drops",
    text: "16",
  },
];

const container_8 = document.getElementById("card_5");
const box = document.createElement("div");
box.classList.add("cont_box");

data_section_8.map((item, index) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("card_5_box");

  const text = document.createElement("span");
  text.classList.add("header_big");
  text.textContent = item.text;

  const header = document.createElement("span");
  header.innerHTML = item.header.replace("\n", "<br>");

  itemDiv.appendChild(header);
  itemDiv.appendChild(text);
  box.appendChild(itemDiv);

  container_8.appendChild(box);
});

// 14 section
const caseStudies = [
  {
    id: "001",
    moic: "9.59x MOIC",
    title: "K2 SPACE",
    tag: "AEROSPACE",
    color: "#FF6F00",
    highlight: "GIANT SATTELITE BUSES",
    description:
      "high capability satellites at the price and speed of small sats",
    investment: {
      details:
        "Invested 58 days after incorporation.$100K at Pre-Seed (Fund I) & $100K at Seed (LP SPV).",
      followOn: "Altimeter, Valor, Lightspeed",
    },
    support:
      "Series A deck narrative & design feedback. PR firm recommendations.",
    traction:
      "$3B+ customer pipeline. $40M+ in government contracts. $50M Series A (Altimeter) > $110M Series B (Lightspeed)",
    testimonial: {
      text: "“We were fortunate to raise competitive rounds and brought in Spacecadet for their marketing expertise.”",
      author: "– Karan Kunjur @ K2 Space",
    },
    images: [
      "assets/images/14_block/one.webp",
      "assets/images/14_block/two.webp",
    ],
  },
  {
    id: "002",
    moic: "5.36x MOIC",
    title: "FUNCTION",
    tag: "AI",
    color: "#30B0C7",
    highlight: "Personal Health Co-Pilot",
    description: "100+ lab tests with insights from top doctors",
    investment: {
      details:
        "Met Jonathan (CEO) 18 months before incorporation.Invested $422K (Fund I + LP SPV) at Seed (zero revenue).",
      followOn: "a16z, Ari Emanuel, Blake Griffin, Kevin Hart, Matt Damon",
    },
    support:
      "Brand exploration, narrative + design draft for Series A deck, ideated a viral campaign.",
    traction: "100,000+ paying members. Raised $53M Series A led by a16z.",
    testimonial: {
      text: "“I can fill the round very quickly but I thought of you guys given the strong marketing value-add”",
      author: "- Jonathan Swerdlin @ Function",
    },
    images: [
      "assets/images/14_block/three.webp",
      "assets/images/14_block/four.webp",
    ],
  },
  {
    id: "003",
    moic: "4.66x MOIC",
    title: "QUILT",
    tag: "ENERGY",
    color: "#C79030",
    highlight: "Tesla for home HVAC",
    description: "stylish mini-split that heats + cools your home room by room",
    investment: {
      details:
        "Met Paul (CEO) in 2010. Committed pre-Incorporation.Invested $100K at Pre-Seed (Fund I) + $100K at Seed (LP SPV)",
      followOn: "Gradient, Lowercarbon, EIP, Galvanize",
    },
    support:
      "Crafted narrative for Seed + Series A deck. Introduced Seed lead investor (Gradient).",
    traction: "$5M revenue run rate. Raised $33M Series A led by EIP.  ",
    testimonial: {
      text: "“Thanks for being my first real commit on this new company.Means a lot :) I’m excited to work with you on our story/marketing!“",
      author: "- Paul Lambert @ Quilt",
    },
    images: [
      "assets/images/14_block/five.webp",
      "assets/images/14_block/six.webp",
    ],
  },
];

const studies_container = document.getElementById("case-studies-container");
caseStudies.map((study) => {
  const studyHtml = `
    <div class="second_block_box">
      <div class="card_box_14">
        <div class="box_14">
          <div class="box_info">
            <div style="display: flex; align-items: flex-start; gap: 6px; flex-direction: column; width: 100%;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
                <span class="box_header">
                  case study ${study.id}
                </span>
                <div class="box_moic">
                  ${study.moic}
                </div>
              </div>
              <div style="display: flex; gap: 12px; align-items: flex-start;">
                <p class="box_text1">${study.title}</p>
                <div class="text_11" style="border: 0.897321px solid ${study.color
    }; margin-top: 15px;">
                  ${study.tag}
                </div>
              </div>
              <div>
                <p  class="box_text2">
                  ${study.highlight}
                </p>
                <p   class="box_text3">
                  ${study.description}
                </p>
              </div>
            </div>
            <div class="investment-info-section">
              <div class="investment-details">
                <p class="investment-title">INVESTMENT</p>
                <p class="investment-description">${study.investment.details
    }</p>
              </div>
              <div class="investors">
                <p class="follow-on-title">FOLLOW-ON INVESTORS</p>
                <p class="investor-list">${study.investment.followOn}</p>
              </div>
              <div class="testimonial">
                <p class="testimonial-text">${study.testimonial.text}</p>
                <p class="testimonial-author">${study.testimonial.author}</p>
              </div>
            </div>
            <div class="investment-info-section">
              <div class="investment-details">
                <p class="investment-title">support</p>
                <p class="investment-description">${study.support}</p>
              </div>
            </div>
            <div class="investment-info-section">
              <div class="investment-details">
                <p class="investment-title">traction</p>
                <p class="investment-description">${study.traction}</p>
              </div>
            </div>
          </div>
           <div class="box_images">
            ${study.images
      .map(
        (image, index) =>
          `<div class="${index === 0 ? "image_one" : "image_two"}" style="background-image: url(${image});"></div>`
      )
      .join("")}
          </div>
        </div>
      </div>
    </div>
  `;
  studies_container.insertAdjacentHTML("beforeend", studyHtml);
});

// 15 section
const fundDetailsData = [
  { title: "$50M", description: "Target Fund II", class: "high" },
  { title: "~30", description: "Target Companies", class: "high" },
  {
    title: "$500K-1M",
    description: "Initial Check Size<br>+ ~30% Reserves",
    class: "high",
  },
  { title: "PRE/SEED", description: "Stage" },
  { title: "5–10%", description: "Ownership" },
  { title: "3 YEARS", description: "Investment Period" },
  { title: "2%/20%", description: "Mgmt Fees & Carry<br>(25% at 5x)" },
  { title: "1%", description: "GP Commit" },
  {
    title: "",
    description: [
      { title: "Fund Formation", description: "Wilson Sonsini" },
      { title: "Fund Admin", description: "AngelList" },
    ],
  },
];

const fundDetailsContainer = document.querySelector(".fund-details");

fundDetailsData.map((item, index) => {
  const detailDiv = document.createElement("div");
  detailDiv.classList.add("detail");

  if (index === fundDetailsData.length - 1) {
    detailDiv.style.borderBottom = "none";
  }

  const isArray = Array.isArray(item.description)
  const headingTag = item.class === "high" ? "h1" : "h2"

  let descriptionContent = "";
  if (Array.isArray(item.description)) {
    descriptionContent = item.description
      .map(
        (desc) => {
          return `<h4> 
            ${desc.title}
          </h4>
          <p> ${desc.description}</p> </br> </br>`
        }
      )
      .join("");
  } else {
    descriptionContent = `<p>${item.description}</p>`;
  }

  detailDiv.innerHTML = `
    ${item.title ? `<${headingTag}>${item.title}</${headingTag}>` : ""}
    ${descriptionContent}
  `;

  fundDetailsContainer.appendChild(detailDiv);
});

// 17 section

document.addEventListener('DOMContentLoaded', function () {


  const items = document.querySelectorAll('.gallery-item');
  const gallery = document.querySelectorAll('.gallery-container');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sequence = [
          [2],
          [1, 3],
          [0, 4]
        ];
        let delay = 0;
        sequence.forEach(group => {
          group.forEach(index => {
            setTimeout(() => {
              items[index].classList.add('animate');
            }, delay);
          });
          delay += 600;
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  gallery.forEach(card => {
    observer.observe(card);
  });
});




//Navigation

const button = document.getElementById("button");

const orientationEvent = () => {
  const section0 = document.getElementById("section_0");
  const mobile = document.getElementById("mobile");
  const sectionAll = document.getElementById("section_all");

  section0.style.display = "none";
  const { orientation: { angle }, availWidth } = screen;
  const viewport = document.querySelector("meta[name=viewport]");


  if (availWidth > 768) {
    if (viewport) {
      viewport.parentNode.removeChild(viewport);
    }
    var newViewport = document.createElement('meta');
    newViewport.name = "viewport";
    newViewport.content = "width=1280, initial-scale=0.4, maximum-scale=0.4, user-scalable=no";
    document.head.appendChild(newViewport);
  }

  if (availWidth <= 768) {

    if (angle === 90) {
      sectionAll.style.display = "block";
      mobile.style.display = "none";
      if (viewport) {
        viewport.parentNode.removeChild(viewport);
      }
      const newViewport = document.createElement('meta');
      newViewport.name = "viewport";
      newViewport.content = "width=1280, initial-scale=0.4, maximum-scale=0.4, user-scalable=no";
      document.head.appendChild(newViewport);

    } else {
      mobile.style.display = "flex";
      sectionAll.style.display = "none";
      if (viewport) {
        viewport.parentNode.removeChild(viewport);
      }
      var newViewport = document.createElement('meta');
      newViewport.name = "viewport";
      newViewport.content = "width=device-width, initial-scale=1, maximum-scale=1, interactive-widget=resizes-content";
      document.head.appendChild(newViewport);

    }
  } else {
    sectionAll.style.display = "block";
    mobile.style.display = "none";
    if (viewport?.parentNode) {
      viewport.parentNode.removeChild(viewport);
    }
    var newViewport = document.createElement('meta');
    newViewport.name = "viewport";
    newViewport.content = "width=1280, initial-scale=0.4, maximum-scale=0.4, user-scalable=no";
    document.head.appendChild(newViewport);
  }
}

button?.addEventListener("click", orientationEvent);

screen.orientation.addEventListener('change', orientationEvent)





// Video animations

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".video video");
  let isScrolling = false;
  let scrollTimeout = null;

  const handleVideoPlayPause = () => {
    videos.forEach((video) => {
      if (video.getAttribute('id') === 'video') return video.play();
      if (video.getAttribute('id') === 'video_last') return video.play();
      if (video.getAttribute('id') === 'video_mobile') return video.play();
      if (video.getAttribute('id') === 'video_13') return video.play();

      const videoRect = video.getBoundingClientRect();
      const isInViewport = videoRect.top < window.innerHeight && videoRect.bottom > 0;

      if (isInViewport && isScrolling) {
        if (video.paused) {
          video.play().catch((err) => console.error("Error playing video:", err));
        }
      } else {
        if (!video.paused) {
          setTimeout(() => {
            if (!isScrolling) {
              video.pause();
            }
          }, 400);
        }
      }
    });
  };

  window.addEventListener("scroll", () => {
    isScrolling = true;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
      handleVideoPlayPause();
    }, 200);

    handleVideoPlayPause();
  });

  handleVideoPlayPause();
});



// Hedaers Animation
document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.querySelectorAll(".second_block_header");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 1 }
  );
  paragraphs.forEach(p => {
    observer.observe(p);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.querySelectorAll(".header5");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view1");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 1 }
  );

  paragraphs.forEach(p => {
    observer.observe(p);
  });
});



document.addEventListener("DOMContentLoaded", function () {

  const paragraphs = document.querySelectorAll(".text1, .text2, .text3");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  paragraphs.forEach(p => {
    observer.observe(p);
  });
});



// 2 section animations
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card_1");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  cards.forEach(card => {
    observer.observe(card);
  });
});


//3 section animations
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card_3");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  cards.forEach(card => {
    observer.observe(card);
  });
});



// 4 section animation
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card_4");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        entry.target.classList.add("in-view");
        const fifthBlockBox = document.getElementById("fifth_block_box");

        setTimeout(() => {
          fifthBlockBox.querySelector(".box_4_upper").classList.add("animate-side-by-side");
        }, 600);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    observer.observe(card);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card_box_4");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(card => {
    observer.observe(card);
  });
});



// 5 section animations
document.addEventListener("DOMContentLoaded", function () {
  const cont2 = document.querySelector(".cont2");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        entry.target.classList.add("animate-background");
      }
    });
  }, { threshold: 0.1 });
  observer.observe(cont2);
});


// 8 section animations
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cont_box .card_5_box");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  cards.forEach(card => {
    observer.observe(card);
  });
});


// 9 section animations
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card_9");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 1 });

  cards.forEach(card => {
    observer.observe(card);
  });
});



// 10 section animations
document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".row");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  rows.forEach(row => {
    observer.observe(row);
  });
});


// 14 section animation 
document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".card_box_14");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  rows.forEach(row => {
    observer.observe(row);
  });
});


// 16 section animation
document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".content-wrapper");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  rows.forEach(row => {
    observer.observe(row);
  });
});

// 18 section animations
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box_18");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 1 });
  boxes.forEach(box => {
    observer.observe(box);
  });
});


// 15 section animations
document.addEventListener("DOMContentLoaded", function () {
  const details = document.querySelectorAll(".fund-details .detail");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  details.forEach(detail => {
    observer.observe(detail);
  });


});


// 0 section animations
document.addEventListener("DOMContentLoaded", function () {
  const details = document.querySelectorAll(".content_0");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  details.forEach(detail => {
    observer.observe(detail);
  });


});


// PARALLAX EFFECT
window.addEventListener('scroll', () => {
  const parallaxedItems = document.querySelectorAll('.parallax');
  parallaxedItems.forEach(item => {
    const offset = (window.pageYOffset * .5);
    item.style.transform = `translate(-50%, -50%) translateY(${offset}px)`;
  })
})

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

function scaleContent() {
  if (window.innerWidth < 1920 && window.innerWidth > 1280 && !isMobile.any()) {
    const scale = window.innerWidth / 1920;
    document.documentElement.style.setProperty('--scale', scale > 1 ? 1 : scale);
  } else {
    document.documentElement.style.setProperty('--scale', 1);
  }
}

window.addEventListener('resize', scaleContent)
document.addEventListener('DOMContentLoaded', scaleContent)


// checkbox

const checkbox = document.getElementById("check-box"); 
const popup = document.getElementById("popup");
const overlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");

popup.style.display = "none";
overlay.style.display = "none";

checkbox.addEventListener("click", function() {
    popup.style.display = "flex";
    overlay.style.display = "flex";
});


closePopup.addEventListener("click", function() {
    popup.style.display = "none";
    overlay.style.display = "none";
});

overlay.addEventListener("click", function() {
    popup.style.display = "none";
    overlay.style.display = "none";
});



