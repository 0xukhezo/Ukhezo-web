export const getObserver = (type: string) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(type)
      }
      //   else {
      //     entry.target.classList.remove(type)
      //   }
    })
  })
  return observer
}
