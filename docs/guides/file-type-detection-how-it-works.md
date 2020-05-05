---
title: File Type Detection - How it works

sidebar_label: How it works
---

Here are all the different types of files the Glasswall Rebuild engine detects using the internal structure of files:


| File Types |	File Description |
| -------       | ---------- |
| PDF           |	 Adobe Portable Document |
| JPG GIF PNG EMF WMF TIFF GeoTIFF BMP |	Images  |
| DOC DOT       |	MS Word 97-2003 |   
| XLS XLT       |	MS Excel 97-2003 |
| PPT POT       |	MS PowerPoint 97-2003 |
| DOCX DOCM DOTX DOTM |	MS Word 2003 & later |
| XLSX XLAM XLSM XLTX XLTM | MS Excel 2003 & later |
| XPPTX POTX POTM PPTM PPSX PPAM PPSM |	MS PowerPoint 2003 & later |
| WAV MP3   	| Audio |
| MPG MP4       | Video |
| PE DLL MUI EXE MACH-O COFF ELF |	Portable executables |

### Consuming the API
Once you have your API key by email, use this web UI or this Swagger UI (shown in the video below) to start the service and test your files:

[![](https://res.cloudinary.com/marcomontalbano/image/upload/v1588601215/video_to_markdown/images/youtube--pEvt85P7Y9Y-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/embed/pEvt85P7Y9Y "")

### Support and Feedback
Please use the product-file-type-detection GitHub repo which also contains the Swagger UI code. Open an Issue with any bugs/issues that you discover or provide feedback on how we can make this service better.

### FAQs
**Question:** Where can I access the API?

**Answer:** Check out our swagger page that provides documentation on the API itself

**Question:** How can I upload multiple files for file type detection?

**Answer:** Try out our file type detection drop site. You can upload multiple files at once. By default our site uses the public key with which activity is limited.
>>>>>>> Stashed changes