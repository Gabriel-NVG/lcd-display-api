import I2C_LCD_driver
import sys

lcdi2c = I2C_LCD_driver.lcd()

#Remember that the shell command is "python" and sys.argv[0] is this file name
if len(sys.argv) > 1:
    first_text_line = sys.argv[1]
if len(sys.argv) > 2:
    second_text_line = sys.argv[2] 

#Clear the LCD
lcdi2c.lcd_clear()

#Display the texts
if len(sys.argv) > 1:
    lcdi2c.lcd_display_string(first_text_line, 1,1)
if len(sys.argv) > 2:
    lcdi2c.lcd_display_string(second_text_line, 2,1)
