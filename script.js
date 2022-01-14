const personReview = [
  {
    name: 'Tanya Sinclair',
    job: 'UX Engineer',
    review: `" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. "`,
    img: './images/image-tanya.jpg'
  },
  {
    name: 'John Tarkpor',
    job: 'Junior Front-end Developer',
    review: `" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "`,
    img: './images/image-john.jpg'
  }
]

// PERSON DETAILS
const photo = document.getElementById('photo')
const reviewPerson = document.getElementById('quote')
const namePerson = document.getElementById('name')
const jobPerson = document.getElementById('job')

// BUTTONS
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')

let counter = 0;

// WHEN THE DOCUMENT HAS BEEN LOADED
window.addEventListener("DOMContentLoaded", () => {
  personPreview(counter)
})


// SHOW THE PERSON
const personPreview = (count) => {
  let person = personReview[count]
  photo.src = person.img
  reviewPerson.textContent = person.review
  namePerson.textContent = person.name
  jobPerson.textContent = person.job
}

// NEXT BUTTON
nextBtn.addEventListener('click', () => {
  counter++
  if (counter > personReview.length - 1){
    counter = 0
  }
  personPreview(counter)
})

// PREVIOUS BUTTON
prevBtn.addEventListener('click', () => {
  counter--
  if (counter < 0){
    counter = personReview.length - 1
  }
  personPreview(counter)
})

