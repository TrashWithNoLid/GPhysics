class Conversion {
    static metersToPixels(meters) {
        return meters * 88.24;
    }

    static pixelsToMeters(pixels)
    {
        return pixels / 88.24;
    }
}