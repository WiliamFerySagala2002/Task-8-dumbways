// class Testimonial {
//   constructor(testi, image) {
//     this._testi = testi;
//     this._image = image;
//   }

//   get testi() {
//     return this._testi;
//   }

//   get image() {
//     return this._image;
//   }

//   get html() {
//     return `<div class="wrapper card">
//           <div class="img-card">
//             <img
//               src="${this.image}"
//               alt="${this.user}"
//             />
//           </div>
//           <div class="txt-card">
//             <div class="testi">${this.testi}</div>
//             <div class="user">- ${this.user}</div>
//           </div>
//         </div>`;
//   }
// }

// class UserTestimonial extends Testimonial {
//   constructor(user, testi, image) {
//     super(testi, image);
//     this._user = user;
//   }

//   get user() {
//     return this._user;
//   }
// }

// class CompanyTestimonial extends Testimonial {
//   constructor(company, testi, image) {
//     super(testi, image);
//     this._company = company;
//   }

//   get user() {
//     return this._company + " Company";
//   }
// }

// const testimonial1 = new UserTestimonial(
//   "Elon Musk",
//   "si paling keren jasanya",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSts2Oe_r3cS0mW2B1dyEYZyGkJPeSv4IMHPA&usqp=CAU"
// );
// const testimonial2 = new UserTestimonial(
//   "Dea joe",
//   "Sangat ramah untuk wanita",
//   "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
// );
// const testimonial3 = new CompanyTestimonial(
//   "Tesla",
//   "si paling keren jasanya",
//   "https://cdn.medcom.id/images/content/2021/11/03/1348021/maqDbEnsXH.jpg"
// );

// let testimonialData = [testimonial1, testimonial2, testimonial3];
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//   testimonialHTML += testimonialData[i].html;
// }

// document.getElementById("testimony").innerHTML = testimonialHTML;

const testimonialData = [
  {
    user: "lorem1",
    testi: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni",
    img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 1,
  },
  {
    user: "lorem2",
    testi: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni",
    img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 2,
  },
  {
    user: "lorem3",
    testi: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni",
    img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 2,
  },
  {
    user: "lorem4",
    testi: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni",
    img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4,
  },
  {
    user: "lorem5",
    testi: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni",
    img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
  },
];

function allTestimony() {
  let testimonialHTML = "";

  testimonialData.forEach((i) => {
    testimonialHTML += `<div class="wrapper card">
    <div class="img-card">
      <img
        src="${i.img}"
        alt="${i.user}"
      />
    </div>
    <div class="txt-card">
      <div class="testi">
        ${i.testi}
      </div>
      <div class="user"> ${i.user}</div>
      <div class="star">
        <span>${i.rating}</span>
        <i class="fa-solid fa-star"></i>
      </div>
    </div>
  </div>`;
  });
  document.getElementById("testimony").innerHTML = testimonialHTML;
}
allTestimony();

function filterStars(rating) {
  let testimonialHTML = "";

  const starFilter = testimonialData.filter((i) => {
    return i.rating === rating;
  });
  if (starFilter.length === 0) {
    testimonialHTML += `<h1>Data Not Found</h1>`;
  } else {
    starFilter.forEach((i) => {
      testimonialHTML += `<div class="wrapper card">
      <div class="img-card">
        <img
          src="${i.img}"
          alt="${i.user}"
        />
      </div>
      <div class="txt-card">
        <div class="testi">
          ${i.testi}
        </div>
        <div class="user"> ${i.user}</div>
        <div class="star">
          <span>${i.rating}</span>
          <i class="fa-solid fa-star"></i>
        </div>
      </div>
    </div>`;
    });
  }

  document.getElementById("testimony").innerHTML = testimonialHTML;
}
