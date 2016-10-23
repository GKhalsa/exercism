function circularBuffer(size){
  return new CircularBuffer(size);
}

var CircularBuffer = function(size){
  this.size = size;
  this.buffer = [];
};

CircularBuffer.prototype.read = function(){
  if (this.buffer.length !== 0){
    return this.buffer.shift();
  }
  throw new bufferEmptyException();
};

CircularBuffer.prototype.write = function(data){
  if (data && this.size > this.buffer.length){
    this.buffer.push(data);
  } else if(data){
    throw new bufferFullException();
  }
};

CircularBuffer.prototype.forceWrite = function(data){
  if (this.buffer.length === this.size){
    this.buffer.shift();
    this.buffer.push(data);
  } else {
    this.write(data);
  }
};

CircularBuffer.prototype.clear = function(){
  this.buffer = [];
};

function bufferEmptyException(){
  this.name = 'error';
  this.message = 'the buffer is empty';
}

function bufferFullException(){
  this.name = 'error';
  this.message = 'the buffer is full';
}

module.exports.circularBuffer = circularBuffer;
module.exports.bufferEmptyException = bufferEmptyException;
module.exports.bufferFullException = bufferFullException;
