while True:
    if input.temperature(TemperatureUnit.FAHRENHEIT) >78:
        light.set_all(light.rgb(0,0,255))
    if input.temperature(TemperatureUnit.FAHRENHEIT) <82:
        light.set_all(light.rgb(0,0,255))
    if input.sound_level() > 120:
        light.set_all(light.rgb(255, 0, 0))