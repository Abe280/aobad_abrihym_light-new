while (true) {
    if (input.temperature(TemperatureUnit.Fahrenheit) > 78) {
        light.setAll(light.rgb(0, 0, 255))
    }
    
    if (input.temperature(TemperatureUnit.Fahrenheit) < 82) {
        light.setAll(light.rgb(0, 0, 255))
    }
    
    if (input.soundLevel() > 120) {
        light.setAll(light.rgb(255, 0, 0))
    }
    
}
