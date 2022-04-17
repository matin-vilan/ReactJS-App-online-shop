import React from "react";
import FooterItem from '../FooterItem/FooterItem';


const footerJson = [
    {
      headTitle: "بهداشت شخصی",
      items: [
        "سلامت عمومی",
        "بهداشت سالمندان",
        "بهداشت جنسی",
        "بهداشت بانوان",
        "بهداشت دهان و دندان",
      ],
    },
    {
      headTitle: "مردانه",
      items: [
        " محصولات بدن آقایان",
        "اصلاح آقایان",
        "محصولات موی آقایان",
        "محصولات پوست آقایان",
      ],
    },
    {
      headTitle: "لوازم شخصی برقی",
      items: [
        "حالت دهنده های برفی",
        "اصلاح صورت و بدن",
        "سایر لوازم شخصی",
        "خشک کن ها",
      ],
    },
    {
      headTitle: "سالنی",
      items: [
        "تجهیزات آرایشگاهی",
        "کتاب و حوزه",
        "اپیلاسیون",
        "کاشت و طراحی ناخن",
        "اکستنشن",
        "ابزار آرایش و پیرایش",
      ],
    },
  ];

const TopFooter = () => {
  return (
    <>
      <div className="topFooter d-flex justify-content-md-around justify-content-center align-items-center row m-0 p-0 mb-3">
        <div className="col-md-8 col-12 row m-0 p-0 footerItems d-flex justify-content-start align-items-start">
          {footerJson.map((item, index) => {
            return (
              <FooterItem
                key={index}
                headTitle={item.headTitle}
                items={item.items}
              />
            );
          })}
        </div>
        <div className="col-md-4 col-12 justify-content-center footerEnamad">
          <div className="title">
            <h5>اعتماد شما افتخار ماست</h5>
          </div>
          <div className="enamdLogo d-flex justify-content-around align-align-items-center">
            <div>
              <img
                src="/assets/images/FooterImages/Enamad/samandehi.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div>
              <img
                src="/assets/images/FooterImages/Enamad/enamad.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFooter;
