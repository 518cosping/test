class A {
  create() {
    console.log('create')
  }
}

class B extends A {
  create() {
    console.log('b extends create')
  }
}

class C extends B {
  hah() {
    console.log('c extends create')
  }
}