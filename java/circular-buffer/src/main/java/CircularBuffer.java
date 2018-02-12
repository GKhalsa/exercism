import java.util.ArrayList;
import java.util.List;

public class CircularBuffer<T> {
    T size;
    List<T> buffer = new ArrayList<>();

    CircularBuffer(T size) {
        this.size = size;
    }

    public T read() throws BufferIOException {
        if (buffer.size() == 0) {
            throw new BufferIOException("Tried to read from empty buffer");
        }
        return buffer.remove(0);
    }

    public void write(T element) throws BufferIOException {
        if (size.equals(buffer.size())) {
            throw new BufferIOException("Tried to write to full buffer");
        }
        buffer.add(element);
    }

    public void overwrite(T element) throws BufferIOException {
        if (size.equals(buffer.size())) {
            read();
        }
        write(element);
    }

    public void clear() {
        buffer = new ArrayList<>();
    }
}
