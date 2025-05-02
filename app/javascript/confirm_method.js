import Swal from "sweetalert2"

const wrappedConfirm = async (message, options = {}) => {
  // console.log('wrappedConfirm called with message:', message)
  
  const { confirmButtonText, icon, color } = options // Default text

  const {isConfirmed} = await Swal.fire({
    text: message,
    icon: icon,
    iconColor: color,
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    confirmButtonColor: color
  })
  
  return isConfirmed 
}

export const confirmMethod = ((message) => {
  const obj = {
    'archive' : {
      confirmButtonText:  'Yes, archive it!', icon: 'question', color : '#87adbd'
    },
    'unarchive' : {
      confirmButtonText:  'Yes, unarchive it!', icon: 'question', color : '#87adbd'
    },
    'delete' : {
      confirmButtonText: 'Yes, delete it!', icon: 'warning', color: '#dc2626'
    }
  }

  const contextSpecificText = () => {
    if(message.includes('delete')) return 'delete'
    if(message.includes('unarchive')) return 'unarchive'
    if(message.includes('archive')) return 'archive'
  }


  return wrappedConfirm(message, obj[contextSpecificText()])
});

Turbo.config.forms.confirm = confirmMethod
// export default confirmMethod;