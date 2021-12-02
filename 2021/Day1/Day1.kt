import java.io.File

fun main() {
    fun readFile(filename: String): List<String> = File(filename).readLines()
    var lines = readFile("input.txt").map{ it.toInt() }

    fun compare(a: Int, b: Int) = if (a > b) "larger" else "smaller"

    fun part1() {
        var numLarger: Int = 0
        for (i in 1 until lines.size) {
            if(compare(lines[i], lines[i-1]) == "larger") numLarger++
        }
        print("part 1: ")
        println(numLarger)
    }

    fun part2() {
        var numLarger: Int = 0
        var current: Int
        var last: Int = lines[2]+lines[1]+lines[0]

        for (i in 3 until lines.size) {
            current =  lines[i]+lines[i-1]+lines[i-2]
            if(compare(current, last) == "larger") numLarger++
            last = current
        }

        print("part 2: ")
        println(numLarger)
    }

    part1()
    part2()
}
