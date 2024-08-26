package io.mpanaka.expenseincome

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform