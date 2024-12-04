import re

data = (
    "Microsoft\xc2\xae LifeCam HD-3000 (usb-70090000.xusb-2.1):\n\t/dev/video0\n\n"
    "Microsoft\xc2\xae LifeCam HD-3000 (usb-70090000.xusb-2.2):\n\t/dev/video1\n\n"
)



result = {key: int(value) for key, value in re.findall(r"xusb-(\d+\.\d+)\):\s*/dev/video(\d+)", data)}

print(result)
