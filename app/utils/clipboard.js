

export const copyToClipboard = async (textToCopy, setIsCopied, showSnackbar) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    setIsCopied(textToCopy);
    showSnackbar({message: "Copied to clipboard", type: "success", duration: "4000"})
    setTimeout(() => {
      setIsCopied("");
    }, 4000); // Reset the "Copied" state after 4 seconds
  } catch (error) {
    console.error("Unable to copy to clipboard", error);
    showSnackbar({
      message: "Unable to copy to clipboard",
      type: "error",
      duration: "4000",
    });
  }
};
