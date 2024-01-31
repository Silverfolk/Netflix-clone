/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        custom_bordercolor: '#4F6395',
        custom_Black:'#000000',
        custom_White:'#FFFFFF',
        custom_red:"#e50914",
        custom_nav_comp2_blue:'#4D9EEA',
        custom_comp1_green:'#447345',
        custom_comp2_opaque_blue:'#204E98',
        custom_formcolor:'#F2F3F3',
        custom_alert_grey:'#979BA1',
        
      },
      fontFamily: {
        sans_pro: ['Source Sans Pro', 'sans-serif'],
        helvetica:['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        Inter:['Inter', 'sans-serif'],
        netflix:["Netflix Sans", "Helvetica Neue", "Segoe UI", "Roboto", "Ubuntu", "sans-serif"]

      },
      customwidth:{
       w30:'30%'
      },
      spacing: {
        //common for width, height, padding, margin
        1.25: "5px",
        "0px": "0px",
        "3px":"3px",
        2: "8px",
        "7px":"7px",
        "9px": "9px",
        3: "12px",
        "13px":"13px",
        3.5: "14px",
        "15px": "15px",
        4: "16px",
        "17px": "17px",
        4.5: "18px",
        4.75: "19px",
        5: "20px",
        "21px": "21px",
        6: "24px",
        "25px": "25px",
        7.5: "30px",
        8: "32px",
        "33px": "33px",
        "37px": "37px",
        9.5: "38px",
        "39px": "39px",
        10: "40px",
        10.5: "42px",
        11.5: "46px",
        "49px": "49px",
        12.5: "50px",
        13: "52px",
        19: "76px",
        "77px": "77px",
        20.5: "82px",
        "88px": "88px",
        "89px": "89px",
        "92px":"92px",
        25: "100px",
        "119px": "119px",
        30: "120px",
        31: "124px",
        32.5: "130px",
        "149px": "149px",
        37.5: "150px",
        39.5: "158px",
        40: "160px",
        "175px":"175px",
        "296px":"296px",
        45: "180px",
        "189px": "189px",
        50: "200px",
        "225px": "225px",
        "233px": "233px",
        "239px": "239px",
        "259px": "259px",
        67.5: "270px",
        "305px": "305px",
        "317px": "317px",
        82.5: "330px",
        83.5: "334px",
        "349px": "349px",
        "358px":"358px",
        104: "416px",
        "450px":"450px",
        "466px": "466px",
        127.5: "510px",
        129.5: "518px",
        "543px": "543px",
        140.5: "562px",
        "611px":"611px",
        "637px":"637px",
        165: "660px",
        171: "684px",
        "707px":"707px",
        "727px":"727px",
        "759px": "759px",
        "787px": "787px",
        313.5: "1254px",
        349: "1396px"
      },
      screens: {
        xs: "480px", //min-width 480px
        sm: "640px",
        cs:"628px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px"
      },
      backgroundImage: {
        hero: "url('https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg')"
      }
    } 
  },
  

  plugins: [],
}