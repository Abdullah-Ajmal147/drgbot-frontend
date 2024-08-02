import { toast } from "react-toastify";

export const copyToClipBoard = (contentRef) => {
    if (contentRef.current) {
        // Create a temporary element to hold the rendered text
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = contentRef.current.innerHTML;
    
        // Extract text content (plain text with line breaks)
        const plainText = tempDiv.innerText;
    
        // Use Clipboard API to copy text
        navigator.clipboard.writeText(plainText).then(() => {
            toast.success("Copied Successfully!", { toastId: "toast" })
        }).catch((error) => {
          console.error('Failed to copy text:', error);
        });
      }
}