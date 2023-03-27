// import { useState } from "react";
// import { useEffect } from "react";
// import "../../assets/css/component/community/Community.css";
// import Layout from "../../layout/Layout";

// function Community() {
//   const [weather, setWeather] = useState(null);

//   const getCurrentLocation = () => {
//     // 현재 위치 가져오기
//     navigator.geolocation.getCurrentPosition((position) => {
//       let lat = position.coords.latitude; // 위도
//       let lon = position.coords.longitude; // 경도

//       console.log("현재 위치", lat, lon);
//       getWeatherByCurrentLocation(lat, lon);
//     });
//   };

//   // 현재 위치 날씨 API 가져오기
//   const getWeatherByCurrentLocation = async (lat, lon) => {
//     // &units=metric => 섭씨 사용
//     let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=658d847ef1d28e72e047ab0c5a476d54&units=metric`;
//     // url에 데이터를 가져올 때까지 기다려 주세요
//     let response = await fetch(url);
//     let data = await response.json();
//     // weather에 데이터 담기
//     setWeather(data);
//   };

//   useEffect(() => {
//     getCurrentLocation();
//   }, []);

//   return (
//     <Layout>
// <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
//       <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
//               id="bd-theme"
//               type="button"
//               aria-expanded="false"
//               data-bs-toggle="dropdown"
//               aria-label="Toggle theme (auto)">
//         <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
//         <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
//       </button>
//       <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
//         <li>
//           <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
//             <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
//             Light
//             <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
//           </button>
//         </li>
//         <li>
//           <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
//             <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
//             Dark
//             <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
//           </button>
//         </li>
//         <li>
//           <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
//             <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
//             Auto
//             <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
//           </button>
//         </li>
//       </ul>
//     </div>
// {/* 
// <div class="container"/>
//     <div class="py-5 text-center">
//       <h2>Checkout form</h2>
//       <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
//     </div> */}

// <div class="col-md-7 col-lg-8"/>
//         <h4 class="mb-3"> 모임개설</h4>
//         <form class="needs-validation" novalidate/>
//           <div class="row g-3">
//             <div class="col-sm-6">
//               <label for="firstName" class="form-label"> 성</label>
//               <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
//               <div class="invalid-feedback">
//                 Valid first name is required.
//               </div>
//             </div>

//             <div class="col-sm-6">
//               <label for="lastName" class="form-label"> 이름</label>
//               <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
//               <div class="invalid-feedback">
//                 Valid last name is required.
//               </div>
//             </div>
//             </div>

//             <div class="col-12">
//               <label for="username" class="form-label"> 정원</label>
//               <div class="input-group has-validation">
//                 <span class="input-group-text">@</span>
//                 <input type="text" class="form-control" id="username" placeholder="Username" required/>
//               <div class="invalid-feedback">
//               정원은 숫자로만 입력 가능하며, 2명~10명 사이입니다
//                 </div>
//               </div>
//             </div>

//             <div class="col-12">
//               <label for="email" class="form-label">이메일 <span class="text-body-secondary">(Optional)</span></label>
//               <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
//               <div class="invalid-feedback">
//                 Please enter a valid email address for shipping updates.
//               </div>
//             </div>

//             <div class="col-12">
//               <label for="address" class="form-label">이메일</label>
//               <input type="text" class="form-control" id="address" placeholder="1234 Main St" required/>
//               <div class="invalid-feedback">
//                 Please enter your shipping address.
//               </div>
//             </div>

//             <div class="col-12">
//               <label for="address2" class="form-label">Address 2 <span class="text-body-secondary">(Optional)</span></label>
//               <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
//             </div>

//             <div class="col-md-5"/>
//               <label for="country" class="form-label">Country</label>
//               <select class="form-select" id="country" required>
//                 <option value="">Choose...</option>
//                 <option>United States</option>
//               </select>
//               <div class="invalid-feedback">
//                 Please select a valid country.
//               </div>

//               <div class="col-md-4">
//               <label for="state" class="form-label">State</label>
//               <select class="form-select" id="state" required>
//                 <option value="">Choose...</option>
//                 <option>California</option>
//               </select>
//               <div class="invalid-feedback">
//                 Please provide a valid state.
//               </div>
//             </div>

//             <div class="col-md-3">
//               <label for="zip" class="form-label">Zip</label>
//               <input type="text" class="form-control" id="zip" placeholder="" required/>
//               <div class="invalid-feedback">
//                 Zip code required.
//               </div>
//             </div>
//             <hr class="my-4"/>

//               <div class="form-check">
//                 <input type="checkbox" class="form-check-input" id="same-address"/>
//                 <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
//               </div>

//               <div class="form-check">
//                 <input type="checkbox" class="form-check-input" id="save-info"/>
//                 <label class="form-check-label" for="save-info">Save this information for next time</label>

//               </div>         
//               <div class="my-3">
//             <div class="form-check"/>
//               <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required/>
//               <label class="form-check-label" for="credit">Credit card</label>
//             </div>
//             <div class="form-check">
//               <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required/>
//               <label class="form-check-label" for="debit">Debit card</label>
//             </div>
//             <div class="form-check">
//               <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required/>
//               <label class="form-check-label" for="paypal">PayPal</label>
//             </div>

//         <div class="row gy-3"/>
//             <div class="col-md-6">
//               <label for="cc-name" class="form-label">Name on card</label>
//               <input type="text" class="form-control" id="cc-name" placeholder="" required/>
//               <small class="text-body-secondary">Full name as displayed on card</small>
//               <div class="invalid-feedback">
//                 Name on card is required
//               </div>
//             </div>          

//             <div class="col-md-6">
//               <label for="cc-number" class="form-label">Credit card number</label>
//               <input type="text" class="form-control" id="cc-number" placeholder="" required/>
//               <div class="invalid-feedback">
//                 Credit card number is required
//               </div>
//             </div>

//             <div class="col-md-3">
//               <label for="cc-expiration" class="form-label">Expiration</label>
//               <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
//               <div class="invalid-feedback">
//                 Expiration date required
//               </div>
//             </div>

//             <div class="col-md-3">
//               <label for="cc-cvv" class="form-label">CVV</label>
//               <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
//               <div class="invalid-feedback">
//                 Security code required
//               </div>
//             </div>


          
      
//         </Layout>
        
//   );
// }

// export default Community;
