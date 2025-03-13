import javax.swing.JFrame;
import java.awt.Color;
import javax.swing.JPanel;
import java.awt.Graphics;
import java.util.Date;
class MyPanal extends JPanel implements Runnable{
    public  MyPanal(){
        this.setBackground(Color.GREEN);
        new Thread(this).start();
    };
    @Override
    public void paintComponent(Graphics com){
        super.paintComponent(com);
        com.drawString(new Date().toString(), 200, 200);
    }
    public void run(){
        while(true){
            try{
                this.repaint();
                Thread.sleep(1000);
            }catch(InterruptedException ex){
                System.out.println("error");
            }
        }
    }
}
class Timer{
    public static void main(String []args){
        new Thread(new MyPanal()).start();
        JFrame jfm = new JFrame();
        MyPanal mypan = new MyPanal();
        jfm.setTitle("Hello"); 
        jfm.setContentPane(mypan);
        jfm.setSize(800,800);
        jfm.setVisible(true);
    }
    
}