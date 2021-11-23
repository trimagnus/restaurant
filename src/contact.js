export default function makeContactPage() {
  const contact = document.createElement('div');
  contact.innerHTML = `
  <div class="contact">
    <p>We will cater your next gathering, call us today!</p>
    <p class="contactSection">Restaurant</p>
    <p>5555 Random Drive</p>
    <p>Distant, CA 99999</p>
    <p class="contactSection">Phone: (555) 555-5555</p>
    <p>Fax: (555) 111-5151</p>
  </div>
  `;

  return contact;
}