import { Controller } from "@hotwired/stimulus"
import Swal from "sweetalert2"

export default class extends Controller {
  static values = {
    message: String
  }

  connect() {
    console.log("flash alert controller");
    this.flash();
  }

  flash() {
    Swal.fire({
      position: "bottom-end",
      title: 'Success!',
      text: this.messageValue,
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      didClose: () => {
        const el = this.element;
        el.parentElement.innerHTML = "";
      }
    });
  }
}
