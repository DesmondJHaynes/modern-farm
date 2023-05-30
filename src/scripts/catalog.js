export const catalog = (havestArr) => {
  let renderHTML = ''
  for (const foodObj of havestArr) {
    renderHTML += `<div class="plant">${foodObj.type}</div>`
  }

  console.log(renderHTML)
 return renderHTML;
}