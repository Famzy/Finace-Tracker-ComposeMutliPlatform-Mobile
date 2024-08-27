package io.mpanaka.expenseincome

class Greeting {
    private val platform = getPlatform()

    fun greet(): String {
        return "Hello, ${platform.name}! by Eric"
    }
}