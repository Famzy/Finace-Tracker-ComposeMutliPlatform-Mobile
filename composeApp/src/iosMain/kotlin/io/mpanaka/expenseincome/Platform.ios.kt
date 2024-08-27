package io.mpanaka.expenseincome

import platform.UIKit.UIDevice

class IOSPlatform: Platform {
    override val name: String = UIDevice.currentDevice.systemName() + " " + UIDevice.currentDevice.systemVersion + "Now i can see the light"
}

actual fun getPlatform(): Platform = IOSPlatform()