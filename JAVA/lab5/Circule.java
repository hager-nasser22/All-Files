import java.awt.Color;
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.Graphics;
class CirculePanal extends JPanel implements Runnable{
    public int x;
    public int y;
    public CirculePanal(){
        this.setBackground(Color.white);
        new Thread(this).start();
    }
    @Override
    public void paintComponent(Graphics com){
        super.paintComponent(com);
        com.fillArc( this.x,this.y, 50, 50, 0, 360);
    }
    public void run(){
        while(this.getWidth() == 0 || this.getHeight() == 0){
            try{
                Thread.sleep(1000);
            }catch(InterruptedException ex){
                System.out.println("error");
            }
        }
        while(true){
            try{
                this.x = (int)(Math.random()*(this.getWidth()-50)) ;
                this.y = (int)(Math.random()*(this.getHeight()-50));
                if(this.x > this.getWidth()){
                    this.x = 0;
                }
                if(this.y > this.getHeight()){
                    this.y=0;
                }
                this.repaint();
                Thread.sleep(1000);
            }catch(InterruptedException ex){
                System.out.println("error");
            }
        }
    }
}
class Circule{
    public static void main(String []args){
//        new Thread(new CirculePanal()).start();
        JFrame jfm = new JFrame();
        CirculePanal cirpn = new CirculePanal();
        jfm.setTitle("frame2");
        jfm.setContentPane(cirpn);
        jfm.setSize(800,800);
        jfm.setVisible(true);
    }
}