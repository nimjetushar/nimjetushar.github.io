// import * as $ from 'jquery';

// export const contentWayPoint = () => {
//   $('.animate-box').waypoint(
//     function (direction) {
//       if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
//         $(this.element).addClass('item-animate');
//         setTimeout(function () {
//           $('body .animate-box.item-animate').each(function (k) {
//             const el = $(this);
//             setTimeout(
//               function () {
//                 const effect = el.data('animate-effect');
//                 if (effect === 'fadeIn') {
//                   el.addClass('fadeIn animated-fast');
//                 } else if (effect === 'fadeInLeft') {
//                   el.addClass('fadeInLeft animated-fast');
//                 } else if (effect === 'fadeInRight') {
//                   el.addClass('fadeInRight animated-fast');
//                 } else {
//                   el.addClass('fadeInUp animated-fast');
//                 }

//                 el.removeClass('item-animate');
//               },
//               k * 100,
//               'easeInOutExpo'
//             );
//           });
//         }, 50);
//       }
//     },
//     { offset: '85%' }
//   );
// };
